from django.conf.urls import url

import livinglots_lots.urls as llurls

from .views import (CreateLotView, LotDetailView, LotDetailViewJSON,
                    LotsCountViewWithAcres, LotsGeoJSONCentroid,
                    LotsGeoJSONPolygon, LotsOwnershipOverview, LotsCSV, LotsKML,
                    LotsGeoJSON, SameOwner, SearchView)


urlpatterns = [
    url(r'^(?P<bbl>\d{10})/$', LotDetailView.as_view(), name='lot_detail'),
    url(r'^(?P<pk>\d+)/json/$', LotDetailViewJSON.as_view(),
        name='lot_detail_json'),
    url(r'^geojson-centroid/', LotsGeoJSONCentroid.as_view(),
        name='lot_geojson_centroid'),
    url(r'^geojson-polygon/', LotsGeoJSONPolygon.as_view(),
        name='lot_geojson_polygon'),
    url(r'^count/ownership/', LotsOwnershipOverview.as_view(),
        name='lot_ownership_overview'),
    url(r'^count/', LotsCountViewWithAcres.as_view(), name='lot_count'),
    url(r'^csv/', LotsCSV.as_view(), name='csv'),
    url(r'^kml/', LotsKML.as_view(), name='kml'),
    url(r'^geojson/', LotsGeoJSON.as_view(), name='geojson'),
    url(r'^search/', SearchView.as_view(), name='search'),

    url(r'^create/by-parcels/$', CreateLotView.as_view(),
        name='create_by_parcels'),

    url(r'^(?P<pk>\d+)/same-owner/', SameOwner.as_view(),
        name='lot_same_owner'),

] + llurls.urlpatterns
