import { useState } from 'react';
// import CourseGoal from './components/CourseGoal';
import CourseCardList from './components/CourseCardList';
import Header from './components/Header';
import goalImage from './assets/goals.jpg';
import NewGoal from './components/NewGoal';
export type Goal = {
  id: number;
  title: string;
  description: string;
}

export default function App() {
  const [goals, setGoals] = useState<Array<Goal>>([]);
  const handleAddGoal = (title:string,description:string) => {
    const newGoal = {
      id: Math.random(),
      title:title,
      description: description,
    }
     setGoals(prevGoals=>{
      return [...prevGoals,newGoal];
     });
    console.log('Add Goal',goals);
  }
  const handleDeleteGoal = (id:number) => {
    setGoals(prevGoals=>{
      return prevGoals.filter(goal=>goal.id !== id);
    })
  }
  return (
    <main>
      <Header image={{src: goalImage, alt: 'A List of Goals'}}>
        <h1>Hello World</h1>
      </Header>
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      <NewGoal onSubmit={handleAddGoal}/>
      <CourseCardList goals={goals} handleDeleteGoal={handleDeleteGoal}/>

    </main>
  )
;
}
