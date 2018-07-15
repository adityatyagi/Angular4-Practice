
export class CoursesService{

    // logic for getting data from the server, this will also decouple the HTTP endpoint from the component
    getCourses(){
        return ["JAVA", "SQL", "JavaScript"];
    }
}