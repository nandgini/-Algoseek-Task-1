export type NoteType = 'Message' | 'Phone' | 'Coffee' | 'Beer' | 'Meeting';

export interface Note {
  id: string;
  content: string;
  timestamp: Date;
  user: string;
  type: NoteType;
}