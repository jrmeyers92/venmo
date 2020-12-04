import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import theme from "./Theme";

const useStyles = makeStyles((theme) => ({
	h1: {
		fontFamily: "Sansita Swashed",
		letterSpacing: "1px",
		fontSize: "2.5rem",
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<AppBar>
				<Toolbar>
					<h1 className={classes.h1}>vinmo</h1>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
};

export default Header;
