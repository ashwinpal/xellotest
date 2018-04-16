export const title = 'High School Diploma 2017';

export const requirements = {
  title: 'Requirements',
  options: ['Show All']
};

export const credits = {
  title: 'Credits',
  options: ['All', 'Earned', 'Planned', 'Remaining']
};

export const submitButton = 'Ready to Submit';

export const mockData = {
  profileData: {
    credits: {
      left: 14,
      progress: 14,
      total: 30
    }
  },
  yearData: {
    year9: {
      yearTitle: 'YEAR 9 (next year)',
      selected: true,
      courses: [
        {
          id: 'ENG1Pl',
          name: 'English',
          description: 'English 9',
          preRequisite: false,
          credit: '1 cr.'
        },
        {
          id: 'MAT1U1',
          name: 'Functions',
          description: 'Math 9',
          preRequisite: true,
          credit: '1 cr.',
          preRequisiteCourse: 'Add one'
        }
      ],
      available: [
        {
          name: 'Science 9',
          creditInfo: '1 cr.'
        },
        {
          name: 'Geography',
          creditInfo: '1 cr.'
        },
        {
          name: 'French',
          creditInfo: '1 cr.'
        },
        {
          name: 'Elective',
          creditInfo: '16 credits remaining'
        }
      ],
      emptySlots: 2,
      creditInfo: '1 credit plannned'
    },
    year10: {
      yearTitle: 'YEAR 10',
      creditInfo: '0 credit earned',
      emptySlots: 8
    },
    year11: {
      yearTitle: 'YEAR 11',
      creditInfo: '0 credit earned',
      emptySlots: 8
    },
    year12: {
      yearTitle: 'YEAR 12',
      creditInfo: '0 credit earned',
      emptySlots: 8
    }
  }
};
