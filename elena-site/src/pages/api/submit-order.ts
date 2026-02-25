export const prerender = false;

import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';
import { sendTelegramMessage } from '../../lib/telegram';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, phone, email, problem, message } = data;

    if (!name || !phone) {
      return new Response(
        JSON.stringify({ success: false, error: 'Имя и телефон обязательны' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { error: dbError } = await supabase.from('orders').insert({
      name,
      phone,
      email: email || null,
      problem: problem || null,
      message: message || null,
      status: 'new',
    });

    if (dbError) {
      console.error('Supabase error:', dbError);
      return new Response(
        JSON.stringify({ success: false, error: 'Ошибка сохранения заявки' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const telegramText = [
      '🆕 <b>Новая заявка с сайта!</b>',
      '',
      `👤 Имя: ${name}`,
      `📱 Телефон: ${phone}`,
      email ? `📧 Email: ${email}` : '',
      problem ? `❓ Проблема: ${problem}` : '',
      message ? `💬 Сообщение: ${message}` : '',
      '',
      '💰 Статус оплаты: Ожидает',
    ]
      .filter(Boolean)
      .join('\n');

    await sendTelegramMessage(telegramText);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Submit order error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'Внутренняя ошибка сервера' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
