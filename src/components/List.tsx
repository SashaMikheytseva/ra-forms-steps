import { IForm } from "./Form";

interface IItemProps {
  list: IForm[],
  handleRemove: (formdata: IForm) => void
}

export const List = ({list, handleRemove}: IItemProps) => {
 
  return (
    <>
      {list.map((item) => {
        return (
          <li className="list__item" key={item.id}>
            <p className="item__date">{item.date}</p>
            <p className="item__distance">{item.distance}</p>
            <div className="item__controll">
              <button className="btn btn__delete" onClick={() => handleRemove(item)}>✘</button>
            </div>
          </li>
        )
        
      })}
    </>
  )
}
