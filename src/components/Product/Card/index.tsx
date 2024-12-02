import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from '../../../types/product';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }}>
      <Link to={`/products/${product._id}`}>
        <CardMedia
          sx={{ height: 250 }}
          image={product?.media?.length ? product.media[0] : "/static/images/cards/product.jpeg"}
          title="product"
        />
      </Link>
      <CardContent sx={{ height: 120}}>
        <Link to={`/products/${product._id}`} style={{ textDecoration: 'none' }}>
          <Typography gutterBottom variant="h6" component="div">
            {product?.name}
          </Typography>
        </Link>
        <Typography variant='body1' component="div">
          $ {product?.price}
        </Typography>
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