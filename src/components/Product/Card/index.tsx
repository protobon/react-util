import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from '../../../types/product';
import { Link } from 'react-router-dom';
import { Box, Tooltip } from '@mui/material';

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
      <CardContent sx={{ height: 250}}>
        <Box sx={{ display: "flex", justifyContent: "space-between"}}>
          <Link to={`/products/${product._id}`} style={{ textDecoration: 'none' }}>
            <Typography gutterBottom variant="h6" component="div">
              {product?.name}
            </Typography>
          </Link>
          <Typography variant='h6' component="div">
            $ {product?.price}
          </Typography>
        </Box>
        <Tooltip title={product?.description}>
          <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: 2 }}>
            {product?.description && product.description.length > 50 ? product.description.slice(0, 50) + '...' : product.description}
          </Typography>
        </Tooltip>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link to={`/products/${product._id}`}><Button size="small">Details</Button></Link>
      </CardActions>
    </Card>
  );
}