import SunSvg from '@/img/sun.svg';
import PinSvg from '@/img/pin.svg';
import CheckSvg from '@/img/check.svg';
import BookSvg from '@/img/book.svg';

export const buttonActions = [
  { title: 'Get Weather Info', icon: SunSvg, action: 'get_weather' },
  { title: 'Find Dealership', icon: PinSvg, action: 'get_dealership_address' },
  { title: 'Check Availability', icon: CheckSvg, action: 'check_appointment_availability' },
  { title: 'Book a Test Drive', icon: BookSvg, action: 'schedule_appointment' },
];
