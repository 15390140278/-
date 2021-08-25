class Super {
  render() {
    console.log('super')
  }

  run() {
    console.log('run')
  }
}

class Sub extends Super {
  render() {
    super.render()
    super.run()
  }
}

let sub = new Sub()
sub.render()
