// ** Navigation sections imports
import apps from './dashboard-plus'
import pages from './pages'
import forms from './forms'
import tables from './tables'
import others from './others'
import dashboards from './dashboards'
import uiElements from './ui-elements'
import chartsAndMaps from './charts-maps'

//dummy
// , ...apps, ...pages, ...uiElements, ...forms, ...tables, ...chartsAndMaps, ...others

// ** Merge & Export
export default [...dashboards, ...apps]
