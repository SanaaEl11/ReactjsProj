/* eslint-disable react/prop-types */
import { AddShoppingCartOutlined } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

export default function ProductDetails({ product }) {

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', gap: 2.5 }}>
      <Box sx={{ display: 'flex' }}>
        <img
          width={300}
          src={`${product.productImage[0].url}`}
          alt={product.productTitle}
        />
      </Box>
      <Box sx={{ py: 2, textAlign: { xs: 'center', sm: 'left' } }}>
        <Typography variant="h5">{product.productTitle}</Typography>
        <Typography my={0.4} fontSize="22px" color="crimson" variant="h6">
          ${product.productPrice}
        </Typography>
        <Typography variant="body1">{product.productDescription}</Typography>
        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: 'capitalize' }}
          variant="contained"
          
        >
        
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
}
