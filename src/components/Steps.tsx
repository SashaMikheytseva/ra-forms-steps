import { useState } from "react";
import { Form, IForm } from "./Form";
import { List } from "./List";



export const Steps = () => {

  const [trainingList, setTrainingList] = useState<IForm[]>([]);

  const handleFormSubmit = (formData: IForm) => {
    const repeatingItem = trainingList.find((item) => item.date === formData.date);
    const distance = formData.distance;
    if (repeatingItem) {
      repeatingItem.distance = Number(repeatingItem.distance) + Number(distance);
      setTrainingList([...trainingList]);
    } else {
      setTrainingList([...trainingList, formData]);
    }
    
  }

  const sortList = [...trainingList].sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return bDate.getTime() - aDate.getTime();
  });

  const handleRemove = (target: IForm) => {
    const filterList = trainingList.filter((item: IForm): boolean => item.id !== target.id);
    setTrainingList(filterList);
    
  }

  
  
  
  return (
    <>
      <Form handleFormSubmit={handleFormSubmit} />
      <div className="list">
          <p className="list__data">Дата (ДД.ММ.ГГ)</p>
          <p className="list__distance">Пройдено км</p>
          <p className="list__actions">Действия</p>
      </div> 
      <ul className="lists__box">
          <List list={sortList} handleRemove={handleRemove} />
      </ul>  
    </>
  )
}
