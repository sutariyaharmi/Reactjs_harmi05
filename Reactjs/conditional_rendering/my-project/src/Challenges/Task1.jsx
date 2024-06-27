import React from 'react'

const Task1 = () => {
  return (
    <>
    <div>
        <ul>
            <ListOfproduct name="mango" isStoked={true} />
            <ListOfproduct name="banana" isStoked={true} />
            <ListOfproduct name="kiwi" isStoked={false} />
            <ListOfproduct name="apple" isStoked={false} />
        </ul>
    </div>
    </>
      )
}

export const ListOfproduct = ({name , isStoked}) => {
    return <li>
        { isStoked ? name + "stocked" : name  }
    </li>
}

export default Task1