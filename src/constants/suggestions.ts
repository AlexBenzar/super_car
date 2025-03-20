import SunSvg from '@/assets/images/sun.svg';
import PinSvg from '@/assets/images/pin.svg';
import CheckSvg from '@/assets/images/check.svg';
import BookSvg from '@/assets/images/book.svg';

// AI tools
export const SUGGESTIONS = [
  { title: 'Weather information', icon: SunSvg, action: 'get_weather' },
  { title: 'Dealership address', icon: PinSvg, action: 'get_dealership_address' },
  { title: 'Appointment availability', icon: CheckSvg, action: 'check_appointment_availability' },
  { title: 'Appointment confirmation', icon: BookSvg, action: 'schedule_appointment' },
];
