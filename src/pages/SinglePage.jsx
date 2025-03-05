import React from 'react'
import { useParams } from 'react-router-dom'
import { researchPapers } from '../utils/data'
import PaperDetails from '../components/PaperDetails';

const SinglePage = () => {
  const { id } = useParams();
  const paper = researchPapers.find((paper) => paper.id === Number(id));
  console.log(paper);

  if (!paper) {
    return <h1 className="text-xl text-red-600">Paper not found</h1>;
  }

  return (
    <div>
      <PaperDetails paper={paper} />
    </div>
  )
}

export default SinglePage;
