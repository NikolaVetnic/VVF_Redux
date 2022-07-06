import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard(props) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.date}
                </Typography>
                <Typography variant="body2">{props.msg}</Typography>
            </CardContent>
        </Card>
    );
}
