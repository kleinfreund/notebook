class NotesController < ApplicationController
  def index
    Rails.logger.info 'Called NotesController#index'
    notes = NoteStore.get_notes()

    render json: { notes: notes.values }
  end

  def update
    Rails.logger.info 'Called NotesController#update'

    note_id = params[:note_id]
    note = {
      'id' => note_id,
      'content' => params[:note][:content]
    }

    NoteStore.add_note(note_id, note)

    render json: { note: note }
  end

  def destroy
    Rails.logger.info 'Called NotesController#destroy'

    NoteStore.remove_note(params[:note_id])

    render json: success_json
  end
end
