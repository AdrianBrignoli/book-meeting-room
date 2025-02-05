export type BookingEvent = {
  id: number;
  title: string;
  capacity: number;
  start: Date;
  end: Date;
};

export interface BookingDB {
  id?: number;
  title: string;
  start: string;
  end: string;
}

export type PopupErrorProps = {
  msg: string;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ButtonProps = {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  chosenSlotId: number | undefined;
};

export type CustomCalenderProps = {
  children: (data: {
    preIndexContent: BookingEvent[];
    indexContent: BookingEvent[];
    postIndexContent: BookingEvent[];
  }) => React.ReactNode;
};
