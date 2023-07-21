import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Article } from '@/API';
import Link from 'next/link';
import { Rating } from '@mui/material';
interface ArticleCardProps {
    article: Article;
}
const ArticleCard: React.FC<ArticleCardProps> = ({article}) => {
    const screenWidth = window.innerWidth;
    const width = screenWidth > 600 ? 140 : 0;
  return (
    <Card sx={{
        //  maxWidth: 345,
         display: 'flex',
         }}>
      <CardMedia
        sx={{ 
            height: 140,
            width: width,
            display: 'flex',
        }}
        image="/IMG_8346.jpeg"
        // src="/IMG_8346.jpeg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Comming soon... here will be the article content
        </Typography>
        <Rating sx={{margin: 1}} name="read-only" value={Math.random()*5} readOnly />
      </CardContent>
      <CardActions>
        <Button size="small">
            <Link href={article.link} target='_brank'>Read More</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
export default ArticleCard;