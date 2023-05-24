import { CalendarDaysIcon } from "@heroicons/react/24/outline"

export const BookAppointment = () => (
  <a
    href="https://squareup.com/appointments/book/cf1a20de-7a96-4898-a78a-88d1a9f48eed/FFHV5JVBVV2M6/start"
    target="_blank"
    type="button"
    className="relative inline-flex items-center rounded-md border border-transparent bg-simplyrooted-700 px-4 py-2 text-lg font-semibold text-white shadow-sm hover:bg-simplyrooted-800 focus:outline-none focus:ring-2 focus:ring-simplyrooted-700 focus:ring-offset-2"
  >
    <CalendarDaysIcon
      className="mr-2 h-5 w-5 flex-shrink-0"
      aria-hidden="true"
    />
    <span>
      Book <span className="hidden md:inline">Appointment</span>
    </span>
  </a>
)
