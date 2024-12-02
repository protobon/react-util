import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from '../../../types/product';
import { Link } from 'react-router-dom';
import { Box, Tooltip } from '@mui/material';
import { useState } from 'react';
import { Check } from '@mui/icons-material';
import { useCart } from '../../../common/context/cart';
import { CartItem } from '../../../types/cart';

export default function ProductCard({ product }: { product: Product }) {
  const [copied, setCopied] = useState(false);
  const { addToCart } = useCart();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href + `/${product._id}`)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }}>
      <Link to={`/products/${product._id}`}>
        <CardMedia
          sx={{ height: 250 }}
          image={product?.media?.length ? product.media[0] : "/static/images/cards/product.jpeg"}
          title="product"
        />
      </Link>
      <CardContent sx={{ height: 200 }}>
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
        <Button size="small" onClick={handleShare}>
          {copied ? <Check /> : 'Copy'}
        </Button>
        <Link to={`/products/${product._id}`}><Button size="small">Details</Button></Link>
        <Button size="small" onClick={() => addToCart({quantity: 1, ...product} as CartItem)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}