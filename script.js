!function() {
    "use strict";
    const e = [{
        keyCode: 81,
        keyTrigger: "Q",
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    }, {
        keyCode: 87,
        keyTrigger: "W",
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    }, {
        keyCode: 69,
        keyTrigger: "E",
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    }, {
        keyCode: 65,
        keyTrigger: "A",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    }, {
        keyCode: 83,
        keyTrigger: "S",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    }, {
        keyCode: 68,
        keyTrigger: "D",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    }, {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    }, {
        keyCode: 88,
        keyTrigger: "X",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    }, {
        keyCode: 67,
        keyTrigger: "C",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }]
      , t = [{
        keyCode: 81,
        keyTrigger: "Q",
        id: "Chord-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    }, {
        keyCode: 87,
        keyTrigger: "W",
        id: "Chord-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    }, {
        keyCode: 69,
        keyTrigger: "E",
        id: "Chord-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    }, {
        keyCode: 65,
        keyTrigger: "A",
        id: "Shaker",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    }, {
        keyCode: 83,
        keyTrigger: "S",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    }, {
        keyCode: 68,
        keyTrigger: "D",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    }, {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Punchy-Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    }, {
        keyCode: 88,
        keyTrigger: "X",
        id: "Side-Stick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    }, {
        keyCode: 67,
        keyTrigger: "C",
        id: "Snare",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    }]
      , a = {
        backgroundColor: "orange",
        boxShadow: "0 3px orange",
        height: 77,
        marginTop: 13
    }
      , s = {
        backgroundColor: "grey",
        marginTop: 10,
        boxShadow: "3px 3px 5px black"
    };
    class r extends React.Component {
        constructor(e) {
            super(e),
            this.state = {
                padStyle: s
            },
            this.playSound = this.playSound.bind(this),
            this.handleKeyPress = this.handleKeyPress.bind(this),
            this.activatePad = this.activatePad.bind(this)
        }
        componentDidMount() {
            document.addEventListener("keydown", this.handleKeyPress)
        }
        componentWillUnmount() {
            document.removeEventListener("keydown", this.handleKeyPress)
        }
        handleKeyPress(e) {
            e.keyCode === this.props.keyCode && this.playSound()
        }
        activatePad() {
            this.props.power ? "orange" === this.state.padStyle.backgroundColor ? this.setState({
                padStyle: s
            }) : this.setState({
                padStyle: a
            }) : 13 === this.state.padStyle.marginTop ? this.setState({
                padStyle: s
            }) : this.setState({
                padStyle: {
                    height: 77,
                    marginTop: 13,
                    backgroundColor: "grey",
                    boxShadow: "0 3px grey"
                }
            })
        }
        playSound() {
            const e = document.getElementById(this.props.keyTrigger);
            e.currentTime = 0,
            e.play(),
            this.activatePad(),
            setTimeout(( () => this.activatePad()), 100),
            this.props.updateDisplay(this.props.clipId.replace(/-/g, " "))
        }
        render() {
            return React.createElement("div", {
                className: "drum-pad",
                id: this.props.clipId,
                onClick: this.playSound,
                style: this.state.padStyle
            }, React.createElement("audio", {
                className: "clip",
                id: this.props.keyTrigger,
                src: this.props.clip
            }), this.props.keyTrigger)
        }
    }
    class i extends React.Component {
        constructor(e) {
            super(e)
        }
        render() {
            let e;
            return e = this.props.power ? this.props.currentPadBank.map(( (e, t, a) => React.createElement(r, {
                clip: a[t].url,
                clipId: a[t].id,
                key: a[t].id,
                keyCode: a[t].keyCode,
                keyTrigger: a[t].keyTrigger,
                power: this.props.power,
                updateDisplay: this.props.updateDisplay
            }))) : this.props.currentPadBank.map(( (e, t, a) => React.createElement(r, {
                clip: "#",
                clipId: a[t].id,
                key: a[t].id,
                keyCode: a[t].keyCode,
                keyTrigger: a[t].keyTrigger,
                power: this.props.power,
                updateDisplay: this.props.updateDisplay
            }))),
            React.createElement("div", {
                className: "pad-bank"
            }, e)
        }
    }
    class o extends React.Component {
        constructor(t) {
            super(t),
            this.state = {
                power: !0,
                display: String.fromCharCode(160),
                currentPadBank: e,
                currentPadBankId: "Heater Kit",
                sliderVal: .3
            },
            this.displayClipName = this.displayClipName.bind(this),
            this.selectBank = this.selectBank.bind(this),
            this.adjustVolume = this.adjustVolume.bind(this),
            this.powerControl = this.powerControl.bind(this),
            this.clearDisplay = this.clearDisplay.bind(this)
        }
        powerControl() {
            this.setState({
                power: !this.state.power,
                display: String.fromCharCode(160)
            })
        }
        selectBank() {
            this.state.power && ("Heater Kit" === this.state.currentPadBankId ? this.setState({
                currentPadBank: t,
                display: "Smooth Piano Kit",
                currentPadBankId: "Smooth Piano Kit"
            }) : this.setState({
                currentPadBank: e,
                display: "Heater Kit",
                currentPadBankId: "Heater Kit"
            }))
        }
        displayClipName(e) {
            this.state.power && this.setState({
                display: e
            })
        }
        adjustVolume(e) {
            this.state.power && (this.setState({
                sliderVal: e.target.value,
                display: "Volume: " + Math.round(100 * e.target.value)
            }),
            setTimeout(( () => this.clearDisplay()), 1e3))
        }
        clearDisplay() {
            this.setState({
                display: String.fromCharCode(160)
            })
        }
        render() {
            const t = this.state.power ? {
                float: "right"
            } : {
                float: "left"
            }
              , a = this.state.currentPadBank === e ? {
                float: "left"
            } : {
                float: "right"
            };
            [].slice.call(document.getElementsByClassName("clip")).forEach((e => {
                e.volume = this.state.sliderVal
            }
            ));
            return React.createElement("div", {
                className: "inner-container",
                id: "drum-machine"
            }, React.createElement(i, {
                clipVolume: this.state.sliderVal,
                currentPadBank: this.state.currentPadBank,
                power: this.state.power,
                updateDisplay: this.displayClipName
            }), React.createElement("div", {
                className: "logo"
            }, React.createElement("div", {
                className: "inner-logo "
            }, "FCC" + String.fromCharCode(160)), React.createElement("i", {
                className: "inner-logo fa fa-free-code-camp"
            })), React.createElement("div", {
                className: "controls-container"
            }, React.createElement("div", {
                className: "control"
            }, React.createElement("p", null, "Power"), React.createElement("div", {
                className: "select",
                onClick: this.powerControl
            }, React.createElement("div", {
                className: "inner",
                style: t
            }))), React.createElement("p", {
                id: "display"
            }, this.state.display), React.createElement("div", {
                className: "volume-slider"
            }, React.createElement("input", {
                max: "1",
                min: "0",
                onChange: this.adjustVolume,
                step: "0.01",
                type: "range",
                value: this.state.sliderVal
            })), React.createElement("div", {
                className: "control"
            }, React.createElement("p", null, "Bank"), React.createElement("div", {
                className: "select",
                onClick: this.selectBank
            }, React.createElement("div", {
                className: "inner",
                style: a
            })))))
        }
    }
    ReactDOM.render(React.createElement(o, null), document.getElementById("root"))
}();
