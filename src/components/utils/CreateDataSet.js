const data = {
    personal : [
    {
      id: 'personal', 
      fields : [ 
        {'Name' : ''}, 
        {'Surname' : ''}, 
        {'Phone' : ''}, 
        {'Email' : ''}, 
        {'Adress' : ''}]
    }
  ],

    education : [
      {
        id: 'education_1', 
        fields : [ 
          {'started' : ''}, 
          {'graduated' : ''}, 
          {'uni name' : ''}, 
          {'desc' : ''} ]
        }
      ],

      jobs : [
      {
        id: 'job_1', 
        fields : [ 
          {'From' : ''}, 
          {'To' : ''}, 
          {'Place' : ''}, 
          {'Job' : ''}, 
          {'Description' : ''} ]
      }, 
      {
        id: 'job_2', 
        fields : [ 
          {'From' : ''}, 
          {'To' : ''}, 
          {'Place' : ''}, 
          {'Job' : ''}, 
          {'Description' : ''} ]
      }
    ]}

export default {
    personal : [
    {
      id: 'personal', 
      fields : [ 
        {'Name' : ''}, 
        {'Surname' : ''}, 
        {'Phone' : ''}, 
        {'Email' : ''}, 
        {'Adress' : ''}],
        isOpen: true
    }
  ],

    education : [
      {
        id: 'education_1', 
        fields : [ 
          {'started' : ''}, 
          {'graduated' : ''}, 
          {'uni name' : ''}, 
          {'desc' : ''} ],
          isOpen: true
        }
      ],

      jobs : [
      {
        id: 'job_1', 
        fields : [ 
          {'From' : ''}, 
          {'To' : ''}, 
          {'Place' : ''}, 
          {'Job' : ''}, 
          {'Description' : ''} ],
        isOpen: true
      }, 
      {
        id: 'job_2', 
        fields : [ 
          {'From' : ''}, 
          {'To' : ''}, 
          {'Place' : ''}, 
          {'Job' : ''}, 
          {'Description' : ''} ],
          isOpen: false
      }
    ]}