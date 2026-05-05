import * as React from "react";
import { useLang } from "@/lib/lang-context";
import { ROOMS, plural, type RoomKey } from "@/lib/i18n";
import { HOTEL } from "@/lib/hotel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Minus, Plus, MessageCircle } from "lucide-react";
import { format, differenceInCalendarDays, addDays } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  roomKey: RoomKey | null;
};

export function BookingDialog({ open, onOpenChange, roomKey }: Props) {
  const { t, lang } = useLang();
  const room = ROOMS.find((r) => r.key === roomKey) ?? ROOMS[0];
  const roomName = t.rooms.names[room.key];

  const [name, setName] = React.useState("");
  const [checkIn, setCheckIn] = React.useState<Date | undefined>(addDays(new Date(), 1));
  const [checkOut, setCheckOut] = React.useState<Date | undefined>(addDays(new Date(), 3));
  const [guests, setGuests] = React.useState(2);

  React.useEffect(() => {
    if (open) {
      setGuests(Math.min(2, room.capacity));
    }
  }, [open, room.capacity]);

  const nights = checkIn && checkOut ? Math.max(differenceInCalendarDays(checkOut, checkIn), 0) : 0;
  const total = nights * room.price;

  const dateLocale = lang === "ru" || lang === "ky" ? "ru-RU" : lang === "zh" ? "zh-CN" : "en-US";
  const fmtDate = (d: Date) =>
    d.toLocaleDateString(dateLocale, { day: "2-digit", month: "long", year: "numeric" });

  const nightsWord = plural(nights, t.booking.night, t.booking.nights2, t.booking.nights5);
  const guestsWord = plural(guests, t.booking.guest, t.booking.guests2, t.booking.guests5);

  function handleSubmit() {
    if (!name.trim()) {
      toast.error(t.booking.fillName);
      return;
    }
    if (!checkIn || !checkOut || nights < 1) {
      toast.error(t.booking.fillDates);
      return;
    }
    const message = t.booking.waMessage({
      name: name.trim(),
      room: roomName,
      checkIn: fmtDate(checkIn),
      checkOut: fmtDate(checkOut),
      nights,
      guests,
      total,
    });
    const url = `https://wa.me/${HOTEL.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl text-foreground">
            {t.booking.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {t.booking.subtitle}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 mt-2">
          <div className="rounded-xl bg-secondary/60 px-4 py-3 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {t.booking.room}
              </div>
              <div className="font-display text-xl text-foreground">{roomName}</div>
            </div>
            <div className="text-right">
              <div className="text-gold font-semibold">{room.price.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">{t.rooms.perNight}</div>
            </div>
          </div>

          <div>
            <Label htmlFor="name" className="text-sm">{t.booking.name}</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.booking.namePlaceholder}
              className="mt-1.5 bg-background"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-sm">{t.booking.checkIn}</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "mt-1.5 w-full justify-start text-left font-normal bg-background",
                      !checkIn && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? fmtDate(checkIn) : t.booking.pickDate}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={(d) => {
                      setCheckIn(d);
                      if (d && checkOut && checkOut <= d) setCheckOut(addDays(d, 1));
                    }}
                    disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label className="text-sm">{t.booking.checkOut}</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "mt-1.5 w-full justify-start text-left font-normal bg-background",
                      !checkOut && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? fmtDate(checkOut) : t.booking.pickDate}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) => !checkIn || date <= checkIn}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-secondary/60 px-4 py-3">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {t.booking.guests}
              </div>
              <div className="text-foreground font-medium">
                {guests} {guestsWord}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
                disabled={guests <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-6 text-center font-semibold">{guests}</span>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => setGuests((g) => Math.min(room.capacity, g + 1))}
                disabled={guests >= room.capacity}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="border-t border-border pt-4 flex items-end justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {nights > 0 ? `${nights} ${nightsWord}` : t.booking.nights}
              </div>
              <div className="text-sm text-muted-foreground">{t.booking.total}</div>
            </div>
            <div className="font-display text-3xl text-foreground">
              {total.toLocaleString()}{" "}
              <span className="text-base text-muted-foreground">сом</span>
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full h-12 bg-[#25D366] hover:bg-[#1da851] text-white font-medium gap-2 shadow-gold"
          >
            <MessageCircle className="h-5 w-5" />
            {t.booking.submit}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
