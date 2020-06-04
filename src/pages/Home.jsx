import React from 'react';
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import ProductCard from '../components/ProductCard';

export default function Home() {
    return (
        <Grid container>
            <Grid item xs={12} sm={4}>
                <ProductCard    productName='Sony Headset' 
                                productDescription='High quality Sony headset for cheap'
                                price='399.00'
                                rallyCount='379'
                                minCount='1000' 
                />
            </Grid>
            <Grid item xs={12} sm={4}>
            <ProductCard    productName='Sony PlayStation 5' 
                                productDescription='State of the art gaming console'
                                price='3,499.00'
                                rallyCount='5,687'
                                minCount='10,000' 
                />
            </Grid>
            <Grid item xs={12} sm={4}>
            <ProductCard    productName='Intel i5-9400H' 
                                productDescription='High quality Sony headset for cheap'
                                price='499.00'
                                rallyCount='578'
                                minCount='1000' 
                />
            </Grid>
            <Button
                variant='contained'
                href='/Login'
            >
                Back to Login Page
        </Button>
        </Grid>

    )
}
