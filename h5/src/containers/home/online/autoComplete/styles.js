const styles = theme => ({
    container: {
	flexGrow: 1,
	position: 'relative',
	textAlign: 'center'
    },
    suggestionsContainerOpen: {
	position: 'absolute',
	marginTop: theme.spacing.unit,
	marginBottom: theme.spacing.unit * 3,
	left: 0,
	right: 0,
    },
    suggestion: {
	display: 'block',
    },
    suggestionsList: {
	margin: 0,
	padding: 0,
	listStyleType: 'none',
    },
    textField: {
	marginLeft: theme.spacing.unit,
	marginRight: theme.spacing.unit,
	width: '90%',
    },
    textFieldInput: {
	borderRadius: 4,
	background: theme.palette.common.white,
	border: '1px solid #ced4da',
	fontSize: 16,
	padding: '10px 12px',
	width: 'calc(100% - 24px)',
	transition: theme.transitions.create(['border-color', 'box-shadow']),
	'&:focus': {
	    borderColor: '#80bdff',
	    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
	},
    },
});

export default styles
