import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from '../../../types/product';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/products/${product._id}`}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/product.jpeg"
          title="product"
        />
      </Link>
      <CardContent>
        <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Link to={`/products/${product._id}`}>
            <Typography gutterBottom variant="h5" component="div">
              {product?.name}
            </Typography>
          </Link>
          <Typography variant='h5' component="div">
            {product?.price}
          </Typography>
        </Container>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link to={`/products/${product._id}`}><Button size="small">Details</Button></Link>
      </CardActions>
    </Card>
  );
}