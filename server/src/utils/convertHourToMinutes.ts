export default function convertHourToMinutes(time: string) { 
  // 8:00 = 1° posição eu tenho à hora e na 2° posição os minutos, separados através do split
  const [hour, minutes] = time.split(':').map(Number);
  const timeInMinutes = (hour * 60) + minutes;
  
  return timeInMinutes;
}