import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const works = [
  {
    title: "Meetingood",
    description: "会議の司会や進行に不安を感じる初心者向けウェブアプリケーション。",
    image: "/meetingood.png",
    url: "https://meetingood.vercel.app/"
  },
  {
    title: "VIRTUAL DRIVING SCHOOL",
    description: "オンライン運転シミュレーター。運転技術の向上をサポートします。",
    image: "/virtual-driving-school.png",
    url: "https://drivingsupport.vercel.app/"
  },
  {
    title: "MINIMALIST TODO LIST",
    description: "ローカルストレージでHTMLファイル1つだけで作成した。TODOリストです",
    image: "minimalist-todo-list.png",
    url: "https://website-playground-rosy.vercel.app/todo.html"
  }
];

export default function Works() {
  return (
    <div className="w-full flex flex-col items-center py-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">My Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 max-w-5xl">
        {works.map((work, index) => (
          <Card key={index} className="shadow-lg rounded-xl overflow-hidden">
            <CardMedia component="img" height="200" image={work.image} alt={work.title} />
            <CardContent>
              <Typography variant="h6" className="font-bold mb-2">
                {work.title}
              </Typography>
              <Typography variant="body2" className="mb-4 text-gray-700">
                {work.description}
              </Typography>
              <Button variant="contained" color="primary" href={work.url}>
                詳細を見る
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
