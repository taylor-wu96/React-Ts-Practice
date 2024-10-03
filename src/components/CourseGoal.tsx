import {type FC, type PropsWithChildren} from 'react';
// type CourseGoalProps = {
//   title: string;
//   description: string;
//   onDelete: () => void;
//   children: React.ReactNode;
// }
type CourseGoalProps = PropsWithChildren<{
  title: string;
  description: string;
  onDelete: () => void;
}>

const CourseGoal:FC<CourseGoalProps> = ({title, description, onDelete, children}) => {
  return (
   <article>
    <h2>{title}</h2>
    <p>{description}</p>
    {children}
    <button onClick={onDelete}>Delete</button>
   </article>

  )
}

export default CourseGoal
