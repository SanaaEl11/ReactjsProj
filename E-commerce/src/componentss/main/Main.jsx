import { Box, CircularProgress, Container, IconButton, Stack, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import { Close } from '@mui/icons-material';
import { AnimatePresence,motion} from "framer-motion";
import ProductDetails from './ProductDetails';
import { useGetproductByNameQuery } from '../../redux/product';




export default function Main() {
 
    const theme=useTheme();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleAlignment = (event,newValue) => {
      if (newValue !== null) {
        setmyDate(newValue);
      }
    };

    const [open, setOpen] = useState(false);
   

  const handleClickOpen = (product) => {
    setSelectedProduct(product); 
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };



 
  const allProductsAPI = "products?populate=*";
  const menCategoryAPI = "products?populate=*&filters[category][$eq]=men";
  const womenCategoryAPI = "products?populate=*&filters[category][$eq]=women";

  const [myDate, setmyDate] = useState(allProductsAPI);



  const { data, error, isLoading } = useGetproductByNameQuery(myDate);
 

if (isLoading) {
  return (
    <Box sx={{ py: 11, textAlign: "center" }}>
      <CircularProgress />
    </Box>
  );
}
if (error) {
  return (
    <Container
      sx={{
        py: 11,
        textAlign: "center",
      }}
    >
      <Typography variant="h6">
        {
          // @ts-ignore
          error.error
        }
      </Typography>

      <Typography variant="h6">Please try again later</Typography>
    </Container>
  );
}


if(data){
  return (
    <Container  sx={{ py: 9 }}>
        <Stack 
         direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}>
            <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
            </Box>
       <ToggleButtonGroup
            
      value={myDate}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{
        ".Mui-selected": {
          border: "2px solid rgb(73, 71, 71) !important",
          backgroundColor: "initial",
          
        }
      }}
    >
      <ToggleButton value={allProductsAPI}
       sx={{ color: theme.palette.text.primary }}
              className="myButton"
              aria-label="centered"
>
      All Products
      </ToggleButton>
      <ToggleButton value={menCategoryAPI} 
      sx={{ mx: "16px !important", color: theme.palette.text.primary}}
      className="myButton" aria-label="right aligned">
        MEN category
      </ToggleButton>
      <ToggleButton value={womenCategoryAPI}
      sx={{ color: theme.palette.text.primary }}
              className="myButton" aria-label="justified" >
         Women category
      </ToggleButton>
    </ToggleButtonGroup>
        </Stack>
       
          
      <Stack direction={"row"} flexWrap={"wrap"}justifyContent={"space-between"}>    
      <AnimatePresence>
    {data.data.map((item)=>{
          return(
             <Card 
             component={motion.section}
             layout
             initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
              key={item.id}
             sx={{
              maxWidth: 333,
              mt: 6,
              ":hover .MuiCardMedia-root ": {
                rotate: "1deg",
                scale: "1.1",
                transition: "0.35s",
              },
            }}
             >
      <CardMedia
        sx={{ height: 277 }}

        // @ts-ignore
        image={`${item.productImage[0].url}`}
        title={item.productTitle}
      />
      <CardContent>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
            >
            <Typography gutterBottom variant="h6" component="div">
            {item.productTitle}
            </Typography>

            <Typography variant="subtitle1" component="p">
            {item.productPrice}
            </Typography>
        </Stack>

        <Typography variant="body2" color="text.secondary">
            {item.productDescription}
        </Typography>

      </CardContent>
      
      <CardActions sx={{justifyContent:'space-between'}}>
        <Button  sx={{textTransform:'capitalize'}}size="large"
        onClick={() => handleClickOpen(item)}>
            <AddShoppingCartOutlinedIcon sx={{mr:1}}/>add to cart
         </Button>
         <Rating name="read-only" precision={0.5} value={item.productRating} readOnly />
      </CardActions>
    </Card>
           );
          })}
           </AnimatePresence>
        </Stack>
        
        <Dialog  sx={{ ".MuiPaper-root": { minWidth:{ xs: "100%", md: 800 } } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
   >
      <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top:0,
              right:10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>







          {selectedProduct && <ProductDetails product={selectedProduct}  />}

          {/* <ProductDetails /> */}
      </Dialog>
        


    </Container>
  );
}
};
