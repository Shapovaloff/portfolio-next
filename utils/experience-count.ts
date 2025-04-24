type DeclinationKey = 'years' | 'month'; // Строгая типизация ключей
type DeclinationText = Record<DeclinationKey, [string, string, string]>;

const declinationText: DeclinationText = {
  years: ['год', 'года', 'лет'],
  month: ['месяц', 'месяца', 'месяцев'],
};

// Улучшенная функция склонения с проверкой ключа
const declination = (num: number, key: DeclinationKey): string => {
  const forms = declinationText[key];
  if (!forms) throw new Error(`Неверный ключ: ${key}`);

  const lastTwoDigits = num % 100;
  const lastDigit = num % 10;

  // Упрощённая логика выбора формы
  if (lastTwoDigits > 4 && lastTwoDigits < 20) return forms[2];
  if (lastDigit > 1 && lastDigit < 5) return forms[1];
  if (lastDigit === 1) return forms[0];
  return forms[2];
};

const monthDiff = (startDate: Date, endDate: Date): number => {
  const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = endDate.getMonth() - startDate.getMonth() + 1;
  return yearsDiff * 12 + monthsDiff;
};

const experienceCount = (): string => {
  const totalMonths = monthDiff(new Date(2020, 8), new Date());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} ${declination(years, 'years')}`);
  if (months > 0) parts.push(`${months} ${declination(months, 'month')}`);

  return parts.join(' и ');
};

export default experienceCount;
