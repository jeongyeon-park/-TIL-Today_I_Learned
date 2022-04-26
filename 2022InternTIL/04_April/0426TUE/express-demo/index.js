const Joi = require('joi');

const express = require('express');
const app = express();

//express.json 은 middleware를 반환한다. 
app.use(express.json());

const courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},
];

// http get request 가 왔을 떄 부르는 함수 
app.get('/', (req, res)=>{
    res.send('Hello World!!!!!');
});

app.get('/api/courses', (req,res)=>{
    res.send(courses);
});

app.post('/api/courses', (req,res)=>{
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);

    if(result.error){
        // 400 bad request
        res.status(400).send(result.error.details[0].message);
        //나머지 코드가 실행되는걸 원하지 않기 때문에 return 
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

app.put('/api/courses/:id', (req,res)=>{
    // Look up the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        return res.status(404).send('The course with the given ID was not found.');
    } 
    //Validate
    //If invalid, return 400 - Bad request

   
    const {error} = validateCourse(req.body);  // result.error

    if(error){
        // 400 bad request
        return res.status(400).send(error.details[0].message);
        //나머지 코드가 실행되는걸 원하지 않기 때문에 return 
    }
    //Update course

    course.name = req.body.name;
    res.send(course);
    //Return the updated course
});


app.delete('/api/courses/:id', (req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found.');

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);
})



//:id 는 파라미터
//:year/:month 이렇게 두개의 파라미터 줄 수도 있다네요
app.get('/api/courses/:id', (req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});

app.get('/api/posts/:year/:month', (req,res)=>{
    res.send(req.query);
});
// app이 주어진 port 로 듣기 시작했을 때 실행 할 함수 
// PORT = 우리가 지정한 환경변수 
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listening on port ${port}...`))
// 실제 deploy 할 때는 dinamic 하게 포트가 정해진다 그래서 3000에만 의존할 수 없다. 
//이걸 고정하는 방법은 환경 변수를 쓰는 것이다. 

