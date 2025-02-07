export type BookingEvent = {
  id: number;
  title: string;
  capacity: number;
  start: Date;
  end: Date;
};

export interface BookingData {
  id: number;
  roomName: string;
  user: string;
  start: string;
  end: string;
  bookingSlotId: number;
}

export type PopupErrorProps = {
  msg: string;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  Icon: React.ComponentType<{ className?: string }>;
};

export type ButtonProps = {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  chosenSlotId: number | undefined;
};

export type CustomCalenderProps = {
  children: (data: {
    preIndexContent: BookingSlotData[];
    indexContent: BookingSlotData[];
    postIndexContent: BookingSlotData[];
  }) => React.ReactNode;
  slotData: BookingSlotData[];
};

export type BookingSlotData = {
  slotId: number;
  start: Date;
  end: Date;
  roomId: number;
  roomName: string;
  capacity: number;
};

export type BookDynamicProps = {
  slotData: BookingSlotData[];
};

export type BookCardProps = BookingData & {
  onDelete: (id: number) => void;
};

export type SlotCardProps = {
  slotId: number;
  name: string;
  capacity: number;
  start: Date;
  end: Date;
  setChosenSlotId: React.Dispatch<React.SetStateAction<number | undefined>>;
  chosenSlotId: number | undefined;
};

export type BookedSlotsProps = {
  bookingData: BookingData[];
};
