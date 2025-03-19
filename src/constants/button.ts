import SunSvg from '@/assets/images/sun.svg';
import PinSvg from '@/assets/images/pin.svg';
import CheckSvg from '@/assets/images/check.svg';
import BookSvg from '@/assets/images/book.svg';

// AI tools
export const SUGESTIONS = [
  { title: 'Get Weather Info', icon: SunSvg, action: 'get_weather' },
  { title: 'Find Dealership', icon: PinSvg, action: 'get_dealership_address' },
  { title: 'Check Availability', icon: CheckSvg, action: 'check_appointment_availability' },
  { title: 'Book a Test Drive', icon: BookSvg, action: 'schedule_appointment' },
];
