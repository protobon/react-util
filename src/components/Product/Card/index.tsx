import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from '../../../types/product';
import { Container } from '@mui/material';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/product.jpeg"
        title="product"
      />
      <CardContent>
        <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            {product?.name}
          </Typography>
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
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}