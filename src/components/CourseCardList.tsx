import CourseGoal from "./CourseGoal"
import {type Goal} from "../App"

const CourseCardList = ({goals , handleDeleteGoal}:{goals:Array<Goal>, handleDeleteGoal:(id:number)=>void}) => {
  return (
    <ul>
    {goals.map(goal=>{
      return <li key={goal.id}>
        <CourseGoal title={goal.title} description={goal.description} onDelete={()=>{handleDeleteGoal(goal.id)}}>
          {}
        </CourseGoal></li>
    })
    }
  </ul>
  )
}

export default CourseCardList
