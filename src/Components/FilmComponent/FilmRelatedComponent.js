import React from 'react'

const FilmRelatedComponent = () => {
  return (
    <div className="col-md-4 col-sm-12">
		<div className="movies-related">
			<h2 className="fred">Related Another Movie's</h2>
			<div className="related-credit">
				<h3 className="related-title">The Force Awakens</h3>
				<ul>
					<li>
						<div className="related-detail-left">Director :</div>
						<div className="related-detail-right related-director">J. J. Abrams</div>
					</li>
					<li>
						<div className="related-detail-left">Producer :</div>
						<div className="related-detail-right related-producer">Kathleen Kennedy, J. J. Abrams, Bryan Burk</div>
					</li>
					<li>
						<div className="related-detail-left">Release Date :</div>
						<div className="related-detail-right related-date">2015-12-11</div>
					</li>
				</ul>
			</div>
			<div className="related-caption">
				<div className="related-opening">Luke Skywalker has vanished.
					In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed.
					With the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. She is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy.
					
					Leia has sent her most daring pilot on a secret mission to Jakku, where an old ally has discovered a clue to Luke's whereabouts....
				</div>
				<div className="related-more fblue">
					See More
				</div>
			</div>
		</div>
	</div>
  )
}

export default FilmRelatedComponent
