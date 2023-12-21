import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../form/EventForm';
import { sampleData } from '../../../app/api/sampleData';
import { useEffect, useState } from 'react';
import { AppEvent } from '../../../app/types/event';

type Props = {
  formOpen: boolean;
  setFormOpen: (value: boolean) => void;
  selectEvent: (event: AppEvent | null) => void;
  selectedEvent: AppEvent | null;
};

export default function EventDashboard({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}: Props) {
  const [events, setEvent] = useState<AppEvent[]>([]);

  useEffect(() => {
    setEvent(sampleData);
  }, []);

  function addEvent(event: AppEvent) {
    setEvent((prevState) => {
      return [...prevState, event];
    });
  }

  function updateEvent(updatedEvent: AppEvent) {
    setEvent(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    selectEvent(null);
    setFormOpen(false);
  }

  function deleteEvent(eventId: string) {
    setEvent(events.filter((evt) => evt.id !== eventId));
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={selectEvent} deleteEvent={deleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            addEvent={addEvent}
            selectedEvent={selectedEvent}
            updateEvent={updateEvent}
            key={selectedEvent ? selectedEvent.id : 'create'}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
