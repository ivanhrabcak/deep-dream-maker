import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
//custom components
import Console from "../Console/Console";
import ProgressBar from "../ProgressBar/ProgressBar";
import FileDialogue from "../FileSelector/FileSelector";
import LayerSelector from "../ParameterFields/LayerSelector"
import ParameterFields from "../ParameterFields/ParameterFields";


class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.consoleRef = React.createRef();
        this.progressBarRef = React.createRef();
    }

    log(text) {
        this.consoleRef.current.add(text)
    }

    render() {
        return (
            <Grid item container direction="column" spacing={1} xs={6} style={{ maxHeight: 512 }} wrap="nowrap">
                <FileDialogue handleUpload={this.props.onFileSelect} disabled={this.props.dreaming} />
                <ParameterFields data={this.props.parameters} disabled={this.props.dreaming} />
                <LayerSelector data={this.props.layerSelector} disabled={this.props.dreaming} />
                {/* Main control buttons */}
                <Grid item container>
                    <ButtonGroup variant="contained" color="primary" size="large" fullWidth>
                        <Button disabled={this.props.dreaming} onClick={this.props.onMakeItDream}>Make it Dream</Button>
                        <Button disabled={!this.props.dreaming} onClick={this.props.onStopDream}>Stop Dream</Button>
                        <Button disabled={!this.props.canDownload || this.props.dreaming} onClick={this.props.onDownload} >Download Dream</Button>
                    </ButtonGroup>
                </Grid>

                {/* Progress bar */}
                <Grid item>
                    {/* <LinearProgress variant="determinate" color="secondary" value={50} /> */}
                    <ProgressBar run={this.props.running} onFinish={this.props.onFinish} console={this.consoleRef} />
                </Grid>

                {/* Console */}
                <Console ref={this.consoleRef} />
            </Grid>
        )
    }

}

export default Inputs
