const getNewJob = (index) => {
    const createdID = 'job_' + index
    return {
    id: createdID, 
    fields : [ 
        {'From' : ''}, 
        {'To' : ''}, 
        {'Place' : ''}, 
        {'Job' : ''}, 
        {'Description' : ''} 
    ],
    isOpen: true}
}

const getNewEducation = (index) => {
    const createdID = 'education_' + index
    return { 
    id: createdID, 
    fields : [ 
        {'started' : ''}, 
        {'graduated' : ''}, 
        {'uni name' : ''}, 
        {'desc' : ''} 
    ],
    isOpen: true
    }
}

export {getNewJob, getNewEducation}