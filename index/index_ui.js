// Helper enum for main views
var MainViews =
{
   START: 'start',
   PROJECT: 'project'
}

// Main React component
class MainView extends React.Component
{
   constructor(props)
   {
      super (props);
      this.state =
      {
         view: MainViews.START
      };
   }

   render()
   {
      // Choose the correct view to render
      let view = null;
      switch (this.state.view)
      {
         case MainViews.START:
            view = <StartScreen />;
            break;
         case MainViews.PROJECT:
            view = <h1>Project screen</h1>;
            break;
      }

      return (
         view
      );
   }
}

// Start screen view
class StartScreen extends React.Component
{
   render()
   {
      return (
         <div className="start_screen">
            <div className="start_screen_top_bar">
               <button>Add project</button> | <button>Settings</button>
            </div>
            <div className="start_screen_content">
               <h1>Start screen</h1>
               <p>[List projects here]</p>
            </div>
         </div>
      );
   }
}

// Main rendering function
ReactDOM.render (
   <MainView />,
   document.getElementById('react_root')
);