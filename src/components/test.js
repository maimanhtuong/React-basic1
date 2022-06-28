var a= [
    {
        id: 0,
        name: "Nguyễn Văn A",
        doB: "1999-01-01T08:59:00.000Z",
        salaryScale: 1.1,
        startDate: "2019-04-30T08:59:00.000Z",
        annualLeave: 1,
        overTime: 1,
        image: '/assets/images/alberto.png',
    },
    {
        id: 1,
        name: "Nguyễn Văn B",
        doB: "2000-01-01T08:59:00.000Z",
        salaryScale: 1.2,
        startDate: "2019-04-30T08:59:00.000Z",
        annualLeave: 2,
        overTime: 3,
        image: '/assets/images/alberto.png',
    },
    {
        id: 2,
        name: "Nguyễn Văn C",
        doB: "2001-01-01T08:59:00.000Z",
        salaryScale: 1,
        startDate: "2019-04-30T08:59:00.000Z",
        annualLeave: 4,
        overTime: 5,
        image: '/assets/images/alberto.png',
    }]

    console.log(a.sort((a, b) => {
        return b.id - a.id;
    }
    ));