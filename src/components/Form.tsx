import { useState } from "react";


export interface IForm {
  date: string,
  distance: number,
  id: number
}

interface IFormProps {
  handleFormSubmit: (formdata: IForm) => void
}

export const Form = ({handleFormSubmit}: IFormProps) => {
  const [form, setForm] = useState<IForm>({
    date: '',
    distance: 0,
    id: 0
  });

  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm(prevForm =>
      ({ ...prevForm, [name]: value}));
  }

  const handleOk = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.id = form.id + 1;
    handleFormSubmit(form);
    setForm({date: '', distance: 0, id: form.id});
  }


  return (
    <form className="form" onSubmit={handleOk}>
        <div className="form-date">
            <label className="form-label" htmlFor="date">Дата (ДД.ММ.ГГ)</label>
            <input className="date-input" type="date" id="date" value={form.date} onChange={handleChange} name="date"></input>
        </div>
        <div className="form-distance">
            <label className="form-distance" htmlFor="distance">Пройдено км</label>
            <input className="distance-input" type="number" id="distance" value={form.distance} onChange={handleChange} name="distance"></input>
        </div>
        <button className="btn-ok" type="submit">OK</button>
    </form>
  )
}
