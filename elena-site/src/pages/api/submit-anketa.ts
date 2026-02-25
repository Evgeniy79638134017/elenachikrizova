export const prerender = false;

import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';
import { sendTelegramMessage } from '../../lib/telegram';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { fullname, birthdate, city, height, weight, complaints, chronic, medications, allergies, sleep, stress, goals } = data;

    if (!fullname || !birthdate || !complaints) {
      return new Response(
        JSON.stringify({ success: false, error: 'ФИО, дата рождения и жалобы обязательны' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { error: dbError } = await supabase.from('anketas').insert({
      fullname,
      birthdate,
      city: city || null,
      height: height ? Number(height) : null,
      weight: weight ? Number(weight) : null,
      complaints,
      chronic: chronic || null,
      medications: medications || null,
      allergies: allergies || null,
      sleep: sleep ? Number(sleep) : null,
      stress: stress ? Number(stress) : null,
      goals: goals || null,
    });

    if (dbError) {
      console.error('Supabase error:', dbError);
      return new Response(
        JSON.stringify({ success: false, error: 'Ошибка сохранения анкеты' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const telegramText = [
      '📋 <b>Новая анкета пациента!</b>',
      '',
      `👤 ФИО: ${fullname}`,
      `🎂 Дата рождения: ${birthdate}`,
      city ? `📍 Город: ${city}` : '',
      height ? `📏 Рост: ${height} см` : '',
      weight ? `⚖️ Вес: ${weight} кг` : '',
      '',
      `🩺 Жалобы: ${complaints}`,
      chronic ? `📋 Хронические: ${chronic}` : '',
      medications ? `💊 Препараты: ${medications}` : '',
      allergies ? `⚠️ Аллергии: ${allergies}` : '',
      '',
      sleep ? `😴 Сон: ${sleep}/10` : '',
      stress ? `😰 Стресс: ${stress}/10` : '',
      goals ? `🎯 Цели: ${goals}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    await sendTelegramMessage(telegramText);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Submit anketa error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'Внутренняя ошибка сервера' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
