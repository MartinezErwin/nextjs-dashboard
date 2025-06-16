import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  PlayIcon,
  MapIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";
import { fetchCardData } from "@/app/lib/data";

type CardType =
  | "invoices"
  | "customers"
  | "pending"
  | "collected"
  | "youtube"
  | "maps"
  | "spotify";

const iconMap: Record<CardType, React.ElementType> = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
  youtube: PlayIcon,
  maps: MapIcon,
  spotify: MusicalNoteIcon,
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  type,
  children,
  className,
}: {
  title: string;
  value: number | string;
  type: CardType;
  children?: React.ReactNode;
  className?: string;
}) {
  const Icon = iconMap[type];

  return (
    <div className={`rounded-xl bg-gray-50 p-2 shadow-sm ${className ?? ""}`}>
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      {children}
    </div>
  );
}
