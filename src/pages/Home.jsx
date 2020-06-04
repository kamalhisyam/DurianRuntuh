import React from 'react';
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import ProductCard from '../components/ProductCard';

export default function Home () {
    return (
    <Grid container>
        <Grid item xs={12} sm={4}>
            <ProductCard/>
        </Grid>
        <Grid item xs={12} sm={4}>
            <ProductCard/>
        </Grid>
        <Grid item xs={12} sm={4}>
            <ProductCard/>
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
