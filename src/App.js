import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter,
Routes,
Route
} from 'react-router-dom'
import About from './components/About'
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  state = {
    progress : 0,
  }
  setProgress = (progress)=> {
    this.setState({
      progress : progress,
    });
  }
  render() {
    return (
      <div>     
        <BrowserRouter>
        <Navbar/>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News key="general" setProgress = {this.setProgress} category="general"/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/sports" element={<News key="sports" setProgress = {this.setProgress} category="sports"/>}></Route>
            <Route exact path="/science" element={<News key="science"  setProgress = {this.setProgress} category="science"/>}></Route>
            <Route exact path="/business" element={<News key="business"  setProgress = {this.setProgress} category="business"/>}></Route>
            <Route exact path="/technology" element={<News key="technology"  setProgress = {this.setProgress} category="technology"/>}></Route>
            <Route exact path="/health" element={<News key="health"  setProgress = {this.setProgress} category="health"/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
