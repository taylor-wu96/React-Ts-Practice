import {useRef} from 'react';

type onSubmitType = (title:string,description:string) => void;
const NewGoal = ({onSubmit}:{onSubmit:onSubmitType}) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = new FormData(event.target as HTMLFormElement);
    // const title = formData.get('title');
    // const description = formData.get('description');
    const title = titleRef.current!.value;
    const description = descriptionRef.current!.value;
    onSubmit(title,description);
    event.currentTarget.reset();
    console.log(title,description);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" ref={descriptionRef} />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  )
}

export default NewGoal
