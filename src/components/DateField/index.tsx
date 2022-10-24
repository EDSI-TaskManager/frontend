import { getYear } from "date-fns";

export const DateField = () => {
  const dayOptions = () => {
    const options = [];
    for (let day = 1; day <= 31; day++)
      options.push(
        <option key={day} value={day}>
          {day}
        </option>
      );
    return options;
  };

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const yearOptions = () => {
    const options = [];
    for (let year = getYear(new Date()); year >= 1900; year--)
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    return options;
  };

  return (
    <div className="flex w-full gap-2">
      <select
        placeholder="Dia"
        name="day"
        className="w-1/3 bg-gray-400 border-black border rounded p-2 outline-none"
      >
        {dayOptions()}
      </select>
      <select
        name="month"
        className="w-1/3 bg-gray-400 border-black border rounded p-2 outline-none"
      >
        {months.map((month) => (
          <option className="border-none" key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select
        name="year"
        className="w-1/3 bg-gray-400 border-black border rounded p-2 outline-none"
      >
        {yearOptions()}
      </select>
    </div>
  );
};
